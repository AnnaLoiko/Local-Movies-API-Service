import React from "react";
import style from "./style.module";

import MovieAdd from "@/main/MovieAdd/MovieAdd";
import Button from '@/components/Button/Button';
import Logo from '@/components/Logo/Logo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ isOpenModal: !this.state.isOpenModal })
  }

  render() {
    return (
      <>
        <header className={style.header}>
          <Logo />
          <Button
            onClick={this.openModal}
            text="+ Add movie"
            className="btnSecondary"
          />
        </header>

        <MovieAdd
          title="Add movie"
          isOpen={this.state.isOpenModal}
          clickCloseModal={() => this.setState({ isOpenModal: false })}
        />
      </>
    );
  }
}

export default Header;