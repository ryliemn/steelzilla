import probe from "probe-image-size";

export async function withDimensions<T extends { src: string }>(photos: T[]) {
  return Promise.all(
    photos.map(async (photo) => {
      const base = photo.src.replace(/\/[^/]+$/, "");
      const fullSrc = `${base}/public`;
      const thumbnail = `${base}/thumbnail`;
      const { width, height } = await probe(fullSrc);
      return { ...photo, src: fullSrc, thumbnail, width, height };
    }),
  );
}
