class C {
  #_version
  #_channel
  #_keyField

  setVersion(version) {
    this.#_version = version
  }
  setChannel(channel) {
    this.#_channel = channel
  }
  setKeyField(keyField) {
    this.#_keyField = keyField
  }

  getVersion() {
    return this.#_version
  }
  getChannel() {
    return this.#_channel
  }
  getKeyField() {
    return this.#_keyField
  }

  getKeyFields() {
    const values = this.#_keyField.map((obj) => {
      return Object.values(obj)[0]
    })
    return values
  }
}

const obj = new C()
obj.setKeyField([{ channel: 'A' }, { channel: 'B' }, { channel: 'C' }])
console.log(obj.getKeyFields())
