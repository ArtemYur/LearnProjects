var SearchResult = React.createClass({
    render: function () {
        return (
            <div className="row">
                {this.props.searchResult ? 
                    <div id="searchResult">
                        <div className="col-sm-8">
                            <h1>{this.props.searchResult.name}</h1>
                        </div>
                        <ReferencesPanelMapped />
                    </div> :
                    ''}
            </div>
      );
    }
});