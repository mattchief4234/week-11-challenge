const util = require("util");
const fs = require("fs");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readfile);
const writeFileAsuync = util.psomisify(fs.writeFile);

class store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }
    write(note) {
        return fs.writeFileAsync("db/db.json", JSON.stringify(note))
    }
    addNote(note) {
        const { title, text } = note

        if (!title || !text) {
            throw new Error("title and text cannot be blank")
        }

        const newNote = { title, text, id: uuid() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
    }

    getNotes() {
        return this.read()
            .then(notes => {
                return JSON.parse(notes) || [];
            })
    }
    removeNote(id) {
        return this.getNotes()
            .then(notes => notes.fileter(note => note.id !== id ))
            .then(keptNotes => this.write(keptNotes))
    }
}

module.exports = new store();