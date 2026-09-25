const fs = require('fs');
const path = require('path');

class JsonFileStore {
  constructor(filename) {
    const rootDir = process.cwd();
    const dataDir = process.env.ALLDONE_DATA_DIR || path.join(rootDir, 'data', 'runtime');
    this.filePath = path.join(dataDir, filename);
    this.backupPath = `${this.filePath}.bak`;
  }

  load(defaultValue) {
    this.ensureDirectory();

    if (!fs.existsSync(this.filePath)) {
      return defaultValue;
    }

    try {
      return this.readJson(this.filePath, defaultValue);
    } catch (error) {
      if (fs.existsSync(this.backupPath)) {
        return this.readJson(this.backupPath, defaultValue);
      }

      throw error;
    }
  }

  save(value) {
    this.ensureDirectory();

    const payload = JSON.stringify(value, null, 2);
    const temporaryPath = `${this.filePath}.${process.pid}.${Date.now()}.tmp`;

    fs.writeFileSync(temporaryPath, payload, 'utf8');

    if (fs.existsSync(this.filePath)) {
      fs.copyFileSync(this.filePath, this.backupPath);
    }

    fs.renameSync(temporaryPath, this.filePath);
  }

  readJson(filePath, defaultValue) {
    const raw = fs.readFileSync(filePath, 'utf8');
    if (!raw.trim()) {
      return defaultValue;
    }

    return JSON.parse(raw);
  }

  ensureDirectory() {
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
  }
}

module.exports = JsonFileStore;
