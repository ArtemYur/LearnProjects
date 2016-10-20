var Content = React.createClass({
    render: function () {
        return (
            <div id="content" className="content">
                <Jumbotron />
                <SearchResultMapped />
            </div>
      );
    }
});