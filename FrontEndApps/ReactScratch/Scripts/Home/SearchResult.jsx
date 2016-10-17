var SearchResult = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.searchResult ? 
                    <div id="searchResult" className="col-sm-12">
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