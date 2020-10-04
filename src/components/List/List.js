import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
state = {
  columns: this.props.columns || [],
  button: 'small',
}

static propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  link: PropTypes.string,
  columns: PropTypes.array,
}

static defaultProps = {
  description: settings.defaultListDescription,
}
	
addColumn(title){
  this.setState(state => (
    {
      columns: [
        ...state.columns,
        {
          key: state.columns.length ? state.columns[state.columns.length-1].key + 1 : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }
  ));		
}
render() {
  return (
    <section className={styles.component}>
      <Hero titleText={this.props.title} link={this.props.link} />
      <div className={styles.description}>
        {ReactHtmlParser(this.props.description)}					
      </div>
      <div className={styles.columns}>
        {this.state.columns.map(({key, ...columnProps}) => (
          <Column key={key} {...columnProps} /> /*DO WYJAŚNIENIA*/
        ))}
      </div>
      <div className={styles.creator}>
        <Creator variant={this.state.button} text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
      </div>
    </section>
  );
}
}

export default List;