import React from 'react';
import Simditor from 'simditor';
import 'simditor/styles/simditor.css'

class RichEditor extends React.Component{
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
		this.loadEditor();
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.defaultDetail !== nextProps.defaultDetail) {
			this.simditor.setValue(nextProps.defaultDetail);
		}
	}

	loadEditor() {
		let ele = this.refs['textarea'];
		this.simditor = new Simditor({
			textarea: $(ele),
			defaultValue: this.props.placeholder || '请输入',
			upload: {
				url: '',
				defaultImage: '/manage/product/richtext_img_upload.do',
				fileKey: 'upload_file'
			}
		});
		this.bindEditorEvent();
	}

	bindEditorEvent() {
		this.simditor.on('valuechanged', e => {
			this.props.onValueChange(this.simditor.getValue());
		})
	}

	render() {
		return (
			<div className="rich-editor">
			    <textarea  ref="textarea"></textarea>
			</div>
		);
	}
}

export default RichEditor;