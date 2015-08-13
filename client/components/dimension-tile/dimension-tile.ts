'use strict';

import * as React from 'react/addons';
import { $, Expression, Dispatcher, Dataset } from 'plywood';
import { Clicker, DataSource, Filter, Dimension, Measure } from '../../models/index';
import { TileHeader } from '../tile-header/tile-header';
import { MenuTable } from "../menu-table/menu-table";

interface DimensionTileProps {
  clicker: Clicker;
  dataSource: DataSource;
  filter: Filter;
  dimension: Dimension;
}

interface DimensionTileState {
  showSearch: boolean;
}

export class DimensionTile extends React.Component<DimensionTileProps, DimensionTileState> {

  constructor() {
    super();
    this.state = {
      showSearch: false
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps: DimensionTileProps) {

  }

  toggleSearch() {
    var { showSearch } = this.state;
    this.setState({ showSearch: !showSearch });
  }

  selectFilter(filter: Filter) {
    var { clicker } = this.props;
    clicker.changeFilter(filter);
  }

  render() {
    var { clicker, dataSource, filter, dimension } = this.props;
    var { showSearch } = this.state;

    return JSX(`
      <div className="dimension-tile">
        <TileHeader
          title={dimension.title}
          onSearch={this.toggleSearch.bind(this)}
          onClose={clicker.unpin.bind(clicker, dimension)}
        />
        <MenuTable
          dataSource={dataSource}
          filter={filter}
          dimension={dimension}
          selectFilter={this.selectFilter.bind(this)}
          showSearch={showSearch}
          showCheckboxes={false}
        />
      </div>
    `);
  }
}
