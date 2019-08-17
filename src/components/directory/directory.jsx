import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {this.state.sections.map(({ id, ...section }) => (
      <MenuItem key={id} {...section} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
