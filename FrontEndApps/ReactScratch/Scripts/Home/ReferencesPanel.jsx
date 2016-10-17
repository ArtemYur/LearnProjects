var ReferencesPanel = React.createClass({
    render: function () {
        return (
            <div className="col-sm-4">
                {this.props.searchResult.parentGeoObejct ? <LinkDispatched name={this.props.searchResult.parentGeoObejct.name} id={this.props.searchResult.parentGeoObejct.id } /> : ''}
                {this.props.searchResult.childGeoObjects ?
                    this.props.searchResult.childGeoObjects.map(childGeoObject =>
                        <LinkDispatched key={childGeoObject.id} name={childGeoObject.name} id={childGeoObject.id } /> ) :
                    ''}
            </div>
      );
    }
});