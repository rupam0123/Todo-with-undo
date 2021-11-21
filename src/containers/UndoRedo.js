import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

function UndoRedo  ({ canUndo, canRedo, onUndo, onRedo })  {
  return(
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
  )
}

const mapStateToProps = state => ({
  canUndo: state.todos.records.length > 0,
  canRedo: state.todos.records.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)
