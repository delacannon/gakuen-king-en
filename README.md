# Gakuen KING EN

3D box viewer for **Gakuen KING -Hidehiko Gakkou wo Tsukuru-** (AliceSoft, 1996, PC-98), with the soundtrack and the English translation patch.

**[Open the site](https://delacannon.github.io/gakuen-king-en/)** (18+)

![Gakuen KING 3D viewer](docs/screenshot.png)

- 3D box: drag to orbit, wheel to zoom, `Space` to turn it, `L` to switch lighting
- Soundtrack player with a spectrum that reacts to the music
- 29 tracks to download as VGZ and MML, each one opens in OPNAvoid
- English patch: drop your own `.hdi` / `.nhd` on the page, a patched copy is saved. Nothing is uploaded and your original is not changed

**Applies to:** the PC-98 CD version, installed on a hard-disk image (`ALI_GAKU` folder). **Tested on emulator only.**

The patch contains no game data: you need your own copy of the game. The back of the box is a stand-in until a scan turns up.

## Run it

```sh
pnpm install --ignore-workspace
pnpm dev
```

The built site lives on the `gh-pages` branch.
