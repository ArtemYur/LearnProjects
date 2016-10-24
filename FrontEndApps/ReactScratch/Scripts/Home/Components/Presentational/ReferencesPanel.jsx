var ReferencesPanel = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3">
                {
                    this.props.geoObject.parentGeoObejct ?
                    <div>
                        <p>Parent geo object</p>
                        <LinkDispatched name={this.props.geoObject.parentGeoObejct.name} id={this.props.geoObject.parentGeoObejct.id } />
                        <hr />
                    </div> :
                    ''
                }
                {
                    this.props.geoObject.childGeoObjects ?
                    <div>
                        <p>Related geo objects</p>
                        {
                            this.props.geoObject.childGeoObjects.map(childGeoObject =>
                                <div key={childGeoObject.id}>
                                    <LinkDispatched name={childGeoObject.name} id={childGeoObject.id} />
                                </div>)
                        }
                    </div> :
                    ''
                }
            </div>
      );
    }
});