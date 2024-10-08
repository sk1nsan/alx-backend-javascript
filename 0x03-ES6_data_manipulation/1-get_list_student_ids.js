export default function getListStudentIds(objectArray) {
  if (!(objectArray instanceof Array)) {
    return [];
  }
  return objectArray.map((x) => x.id);
}
