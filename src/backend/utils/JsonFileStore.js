const fs = require('fs');
const path = require('path');

class JsonFileStore {
  constructor(filename) {
    const rootDir = process.cwd();
    const dataDir = process.env.ALLDONE_DATA_DIR || path.join(rootDir, 'data', 'runtime');
    this.filePath = path.join(dataDir, filename);
  }

  load(defaultValue) {
    this.ensureDirectory();

    if (!fs.existsSync(this.filePath)) {
      return defaultValue;
    }

    const raw = fs.readFileSync(this.filePath, 'utf8');
    if (!raw.trim()) {
      return defaultValue;
    }

    return JSON.parse(raw);
  }

  save(value) {
    this.ensureDirectory();
    const payload = JSON.stringify(value, null, 2);
    fs.writeFileSync(this.filePath, payload, 'utf8');
  }

  ensureDirectory() {
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
  }
}

module.exports = JsonFileStore;
