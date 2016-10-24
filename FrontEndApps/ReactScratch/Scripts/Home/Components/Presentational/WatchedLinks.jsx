var WatchedLinks = React.createClass({
    render: function () {
        return (
            <div className="row" style={{ paddingBottom: "20px" }}>
                {
                    this.props.watchedLinks.length > 0 ?
                    <div className="col-sm-12">
                        <hr />
                        <p>Searched obejects:</p>
                        {
                            this.props.watchedLinks.map((name, i) => 
                                <div className="col-sm-2" key={i}>
                                        <FooterLinkMapped name={name} />
                                    </div>)
                        }
                    </div> :
                    ''
                }
            </div>
      );
    }
});