import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDropDown: false,
    };
    this.clickToggleDropDown = this.clickToggleDropDown.bind(this);
  }

  clickToggleDropDown() {
    this.setState({ isShowDropDown: !this.state.isShowDropDown });
  }

  render() {

    return (
      <>
        <div className={`${style.selectWrap} ${this.state.isShowDropDown && style.up}`} onClick={this.clickToggleDropDown}>
          <h4 className={style.label}>Sort by</h4>
          <div className={style.selected}>Relese date</div>
          
          
          <div className={style.dropDownWrap}>
            <div className={`${!this.state.isShowDropDown && style.hide} ${style.dropDownListWrap}`}>
              <div className={style.dropDownList}>
                <div className={style.itemDrop}>Relese date</div>
                <div className={style.itemDrop}>Title</div>
                <div className={style.itemDrop}>Edit</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Sort.propTypes = {
  sortListOptions: PropTypes.array,
};

export default Sort;

