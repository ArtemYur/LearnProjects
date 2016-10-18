var SearchResult = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.searchResult ? 
                    <div id="searchResult" className="container">
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