var GeoObject = React.createClass({
    render: function () {
        return (
            <div className="row">
                {
                    this.props.geoObject ?
                    <div className="col-sm-12">
                        <hr />
                        <br />
                        <div id="geoObject">
                                <div className="col-sm-8">
                                    <h1>{this.props.geoObject.name}</h1>
                                    <br />
                                    <p>{this.props.geoObject.description}</p>
                                </div>
                                <div className="col-sm-1"></div>
                                <ReferencesPanelMapped />
                        </div>
                    </div> :
                    ''
                }
            </div>
      );
    }
});