import csvIndex from './csvIndex'

const constant = {
  API_URL: 'http://localhost:4000',
  HINTS_INDEX: [
    csvIndex.phase_at_rt,
    csvIndex.standard_atomic_weight,
    csvIndex.boiling_point,
    csvIndex.group,
    csvIndex.period,
    csvIndex.atomic_num,
    csvIndex.origin_of_name,
  ],
}

export default constant
