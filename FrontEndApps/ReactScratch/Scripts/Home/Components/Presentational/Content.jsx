var Content = React.createClass({
    render: function () {
        return (
            <div id="content" className="content">
                <Jumbotron />
                <div className="container">
                    <SearchResultMapped />
                    <WatchedLinksMapped />
                </div>                
            </div>
      );
    }
});