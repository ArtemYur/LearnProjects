var ControlsSection= React.createClass({
    render: function () {
        return (
                <div className="btn-group pull-left">
                    <button type="button" className="btn-secondary btn btn-danger" data-toggle="tooltip" title="Undo" data-placement="bottom" onClick={this.props.onClickUndo} disabled={!this.props.canUndo}><span className="glyphicon glyphicon-arrow-left"></span></button>
                    <button type="button" className="btn-secondary btn btn-danger" data-toggle="tooltip" title="Save state" data-placement="bottom" onClick={this.props.onClickSave}><span className="glyphicon glyphicon glyphicon-save"></span></button>
                    <button type="button" className="btn-secondary btn btn-danger" data-toggle="tooltip" title="Remove from storage" data-placement="bottom" onClick={this.props.onClickRemove}><span className="glyphicon glyphicon-remove"></span></button>
                    <button type="button" className="btn-secondary btn btn-danger" data-toggle="tooltip" title="Load state" data-placement="bottom" onClick={this.props.onClickOpen}><span className="glyphicon glyphicon-open"></span></button>
                    <button type="button" className="btn-secondary btn btn-danger" data-toggle="tooltip" title="Redo" data-placement="bottom" onClick={this.props.onClickRedo} disabled={!this.props.canRedo}><span className="glyphicon glyphicon-arrow-right"></span></button>
                </div>
      );
    }
});