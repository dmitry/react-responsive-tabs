import React, { Component, PropTypes } from 'react';

export default class TabPanel extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.children !== nextProps.children ||
      this.props.classNames !== nextProps.classNames ||
      this.props.selected !== nextProps.selected;
  }

  render() {
    const { classNames, id, tabId, selected, children } = this.props;

    return (
      <div
        className={classNames}
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        aria-hidden={selected ? 'false' : 'true'}
      >
        {children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  id: PropTypes.string,

  // generic props
  classNames: PropTypes.string,
  selected: PropTypes.bool,
  tabId: PropTypes.string,
};
