var ReferencesPanel = React.createClass({
    render: function () {
        return (
            <div className="col-sm-4">
                {
                    this.props.searchResult.parentGeoObejct ?
                    <div>
                        <p>Parent geo object</p>
                        <LinkDispatched name={this.props.searchResult.parentGeoObejct.name} id={this.props.searchResult.parentGeoObejct.id } />
                        <br />
                    </div> :
                    ''
                }
                {
                    this.props.searchResult.childGeoObjects ?
                    <div>
                        <p>Child geo objects</p>
                        {this.props.searchResult.childGeoObjects.map(childGeoObject =>
                        <LinkDispatched key={childGeoObject.id} name={childGeoObject.name} id={childGeoObject.id } /> )}
                    </div> :
                    ''
                }
            </div>
      );
    }
});