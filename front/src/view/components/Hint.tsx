import React from 'react'
import * as reactRedux from 'react-redux'
import { selectHints } from '../../stores/hintSetterSlice'
import constant from '../../util/const'
import csvHeaders from '../../util/csvHeaders'

type HintPropType = {
  hint_index: number
}

function Hint(props: HintPropType) {
  const hints: string[] = reactRedux.useSelector(selectHints)

  return (
    <div className="hint">
      <div className="hintTitle">
        {csvHeaders[constant.HINTS_INDEX[props.hint_index]]}
      </div>
      {hints[props.hint_index]}
    </div>
  )
}

export default Hint
