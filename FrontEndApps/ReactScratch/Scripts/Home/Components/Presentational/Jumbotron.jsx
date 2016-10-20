var Jumbotron = React.createClass({
    render: function () {
        return (
          <div>
              <div className="jumbotron-bg"></div>
              <div className="jumbotron text-center">
                  <h2>Let's find it!</h2>
                  <SearchInputDispatched />
              </div>
          </div>
      );
    }
});