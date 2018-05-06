import React from 'react';
import './index.css';
import User from 'service/user.jsx'
import MUtil from 'util/mm.jsx';


const _user = new User();
const _mm = new MUtil();


class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
		}
	}

    componentWillMount() {
        document.title =  '登陆- HAPPY MMALL';
    }

  //输入框改变
	onInputChange(e) {
		let inputName = e.target.name,
		    value = e.target.value;
		this.setState({
			//变量名是个变量，使用方括号包起来
			[inputName]: value
		});
	}

    onInputKeyup(e) {
        if(e.keyCode === 13) {
            this.onSubmit();
        }
    }

	//点击提交
	onSubmit() {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
        checkResult = _user.checkLoginInfo(loginInfo);
        if(checkResult.status) {
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            })
        }else{
            _mm.errorTips(checkResult.msg);
        }
	}

	render() {
		return (
    	<div className="col-md-4 col-md-offset-4">
    		<div className="panel panel-default login-panel">
    		  <div className="panel-heading">欢迎登陆 -MMALL管理系统</div>
    		  <div className="panel-body">
    		    <div>
    		      <div className="form-group">
    		        <input type="email" 
    		               className="form-control"  
    		               placeholder="请输入用户名"
    		               name="username"
                           onKeyUp={ e => this.onInputKeyup(e)}
    		               onChange={ e => this.onInputChange(e)} />
    		      </div>
    		      <div className="form-group">
    		        <input type="password" 
    		               className="form-control"  
    		               placeholder="请输入密码" 
    		               name="password"
                           onKeyUp={ e => this.onInputKeyup(e)}
    		               onChange={ e => this.onInputChange(e)} />
    		      </div>
    		      <button className="btn btn-lg btn-primary btn-block"
    		              onClick={e => {this.onSubmit(e)}}>登陆</button>
    		    </div>
    		  </div>
    		</div>
    	</div>
		);
	}
}

export default Login;