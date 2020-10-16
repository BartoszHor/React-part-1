import {connect} from 'react-redux';
import List from './List';
import {selectColumnsForList, createActionAddColumn } from '../../redux/columnsRedux';
//export const selectColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => {
  const filteredLists = state.lists.filter(list => list.id == props.match.params.id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: selectColumnsForList(state, props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(List);

