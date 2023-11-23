function alienTranslate(alf1, alf2, msg) {
  if (msg.length === 0) return [];
  
  const translationMap = new Map();
  for (let i = 0; i < alf1.length; i++) {
    translationMap.set(alf1[i], alf2[i]);
  }
  
  return msg.map(value => translationMap.get(value));
}