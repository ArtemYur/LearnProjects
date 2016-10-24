var SearchInput = React.createClass({
    render: function () {
        return (
            <form className="form-inline">
                <div className="input-group">
                    <ReactAutocomplete inputProps={{ className: "form-control", placeholder: "Type geo object name", type: "search"}} 
                                       wrapperStyle={{}}
                                       menuStyle={{
                                            borderRadius: '3px',
                                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            padding: '2px 0',
                                            fontSize: '90%',
                                            position: 'fixed',
                                            overflow: 'auto',
                                            maxHeight: '50%',
                                            textAlign: 'left',
                                            zIndex: '1'
                                        }}
                                       value={this.props.searchTag}
                                       items={this.props.autocomplete}
                                       getItemValue={(item) => item.name}
                                       onSelect={(value, item) => { this.props.onClick(value); }}
                                       onChange={(event, value) => { this.props.executeAutocomplete(value); }}

                                       renderItem={
                                           (item, isHighlighted)=>
                                                (<p style={{ color: "black", textShadow: "none", cursor: "pointer", fontSize: "16px", align: "left"}}
                                                    key={item.abbr}
                                                    id={item.abbr}>{item.name}</p>)}

                        />
                    <span className="input-group-btn">
                        <button type="submit" className="btn-secondary btn btn-danger" onClick={(e) => { this.props.onClick(this.props.searchTag, e); }}>
                            <span className="glyphicon glyphicon-search"></span> Search
                        </button>
                    </span>
                </div>
            </form>
      );
    }
});
