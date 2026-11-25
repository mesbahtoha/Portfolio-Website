// Pick a localized field from a data object.
// English is the default; a sibling `fieldBn` supplies the Bangla value.
export function pick(item, field, lang) {
  if (!item) return ''
  if (lang === 'bn') {
    const bangla = item[`${field}Bn`]
    if (bangla !== undefined && bangla !== null) return bangla
  }
  return item[field]
}

// Localize an item inside an array using the same naming convention.
export function pickFrom(list, index, field, lang) {
  const item = list?.[index]
  return pick(item, field, lang)
}
