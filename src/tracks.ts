export interface Track {
  name: string;
  url: string;
}

export type DownloadFormat = 'vgz' | 'mml';

export interface SongFiles {
  name: string;
  files: Record<DownloadFormat, { url: string; file: string; size: number }>;
}

const base = import.meta.env.BASE_URL;
const entry = (dir: string, file: string, size: number) => ({ url: `${base}${dir}/${encodeURIComponent(file)}`, file, size });

// name, then byte sizes of the VGZ and the MML
const SONGS: [name: string, vgz: number, mml: number][] = [
  ["01 Alice's Theme", 3766, 4391],
  ["02 Welcome to Gakuen Groove", 18204, 55125],
  ["03 Beach Side", 11274, 43310],
  ["04 Poor Mist", 13778, 73602],
  ["05 On My Way", 23438, 107693],
  ["06 Groovin' Up", 18540, 44683],
  ["07 Going, Going, Going", 11356, 48572],
  ["08 Wild One", 18782, 80254],
  ["09 From Deep Under the Ground", 19162, 24670],
  ["10 Dark Step", 23139, 60743],
  ["11 Are You Ready", 17497, 73487],
  ["12 Attention!", 21716, 101983],
  ["13 Run & Run", 46862, 41092],
  ["14 Mysterious", 14823, 61217],
  ["15 The Sky May Be Blue", 27591, 77876],
  ["16 Love Song", 11204, 40088],
  ["17 Silent Word", 9712, 18178],
  ["18 Hold On Me", 21676, 61401],
  ["19 Sayoko", 12514, 40444],
  ["20 Sayoko in Ballade", 14766, 49884],
  ["21 Sad Eyes", 22153, 50247],
  ["22 Nice Guy", 9988, 40653],
  ["23 Last Boss", 26707, 51301],
  ["24 Push & Pop", 15089, 45240],
  ["25 Hello!", 11101, 39059],
  ["26 Unstiffed Guys", 17905, 66181],
  ["27 Scheme", 22202, 36846],
  ["28 Started 'Gakuen King'", 42651, 30563],
  ["29 Completed 'Gakuen King'", 22666, 61549],
];

export const songs: SongFiles[] = SONGS.map(([name, vgz, mml]) => ({
  name,
  files: {
    vgz: entry('music', `${name}.vgz`, vgz),
    mml: entry('mml', `${name}.mml`, mml),
  },
}));

export const tracks: Track[] = songs.map(({ name, files }) => ({ name, url: files.vgz.url }));
