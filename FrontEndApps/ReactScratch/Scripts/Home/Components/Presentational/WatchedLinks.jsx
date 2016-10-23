var WatchedLinks = React.createClass({
    render: function () {
        return (
            <div className="row">
                {
                    this.props.watchedLinks.length > 0 ?
                    <div className="col-sm-12">
                        <hr />
                        <p>Watched obejects:</p>
                        {
                            this.props.watchedLinks.map((name, i) => 
                                <div className="col-sm-2" key={i}>
                                        <LinkDispatched name={name} />
                                    </div>)
                        }
                    </div> :
                    ''
                }
            </div>
      );
    }
});