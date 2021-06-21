# roe
`roe` is a lean tool for developers dealing with Apache Avro.
Its name is a reference to [Alliott Verdon Roe](https://en.wikipedia.org/wiki/Alliott_Verdon_Roe).

## Install
Install `roe` from the root of this project like this:
```bash
npm install . -g
```

## Use
Create a randomized sample of a given Avro schema:
```bash
roe sample examples/user.avsc
```

Validate whether an Avro schema can or cannot be applied to an object:
```bash
roe validate examples/user.avsc examples/user.json
roe validate examples/user.avsc examples/nouser.json
```

Derive an Avro schema from an object:
```bash
roe generalize examples/pet.json
```

## Uninstall
Uninstall roe like this:
```bash
npm uninstall roe -g
```
