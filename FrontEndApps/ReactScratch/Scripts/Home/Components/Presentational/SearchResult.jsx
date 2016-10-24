var SearchResult = React.createClass({
    render: function () {
        return (
            this.props.searchResult && this.props.searchResult.length > 0 ?
            <div className="row">
                {this.props.searchResult.map((item, i) =>
                    <div key={i} className="col-sm-4 text-center" style={{paddingBottom: "15px", cursor: "pointer"}}>
                      <a className="thumbnail" onClick={() => { this.props.onClick(item.id); }}>
                        <img src={item.imageSrc} width="400" height="300" style={{paddingBottom: "5px"}}/>
                        <p><strong>{item.name}</strong></p>
                      </a>
                    </div>
                )}
            </div> :
            this.props.searchResult ? <h1>Not found!</h1> : <div></div>
      );
    }
});

//<div key={i} className="col-sm-4 text-center">
//                    <a href="#" onClick={() => { this.props.onClick(item.id); }}>{item.name}</a>
//</div>