import React from 'react';
import ReactDOM from 'react-dom'


var attri=
{
	Parent:{
		marginTop: 1,
		overflow:'hidden',
		backgroundColor: '#fafafa',
	},
	left:{
		float:"left",
		width:"50%",
	},
	right:{
		float:"right",
		width:"50%",
	},

	Rectangle174: {
      position: 'relative',
      height: 119,
      backgroundColor: '#f9f9f9 ',
      boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.2)",
   },
	STEPS:{
		position:'absolute',
		height: 17,
		left:0,
		top:37,
		fontFamily: 'AvenirNextLTPro-Demi',
		fontSize: 11,
		lineHeight: 1.4,
		letterSpacing: 0.6,
		color: '#000000',

	},
	
	
   BOT: {
	 width: 144,
	 position:'absolute',
	 left:0,
	 height: 29,
	 top:61,
	 fontFamily: 'AvenirNextLTPro-Demi',
	 fontSize: 18,
	 lineHeight: 1.4,
	 letterSpacing: 0.5,
	 color: "#1a84eb",
	 cursor: 'pointer',
	},
	IMAGES:{
		top:58,
		left:0,
		position:'absolute',
	},
	bord:{
		position:'absolute',
		top:51,
		left:0,
		width: 38,
  		height: 0,
  		border:"solid 1.8px #000000",
	}
	

};

var Header=React.createClass({

	getInitialState: function(){
		return {clee:false};
	},
	fun1:function(event)
	{

		this.setState({clee:!this.state.clee});


	},
	render:function () {

	attri.STEPS.left=this.props.sz;
	attri.BOT.left=this.props.sz-3;
	attri.IMAGES.left=this.props.sz-92;
	attri.bord.left=this.props.sz;
	var t=this.state.clee?'#000000':'#1a84eb';
	attri.BOT.color=t;
	if(this.props.st==1){
		return(
			<div>
				<div style={attri.STEPS}>
					STEP {this.props.st} 
				</div>

				<div style={attri.bord}> </div>
				<div style={attri.BOT} onClick={this.fun1}>
					{this.props.children}
				</div>
			</div>
			);

		}
		else{
		return (
			<div>
				<div style={attri.STEPS}>
					STEP {this.props.st} 
				</div>

				<div style={attri.bord}> </div>
				<div style={attri.BOT} onClick={this.fun1}>
					{this.props.children}
				</div>


				<div style={attri.IMAGES}>
				<img src="/home/prerak/Desktop/Archive/react-hot-boilerplate/FrontEndSurveymate/app/asets/arrow.png"/>
				</div>
				
			</div>
			);
		}
	}
});

ReactDOM.render(
	<div style={attri.Rectangle174}>
		<Header  img_src="/home/prerak/Desktop/Archive/react-hot-boilerplate/FrontEndSurveymate/app/assets/arrow.png" sz="79" st="1">
			<div>COMMUNICATE</div>
		</Header>

		<Header   img_src="/home/prerak/Desktop/Archive/react-hot-boilerplate/FrontEndSurveymate/app/assets/arrow.png" sz="558" st="2">
			<div>REVIEW</div>
		</Header>

		<Header  img_src="/home/prerak/Desktop/Archive/react-hot-boilerplate/FrontEndSurveymate/app/assets/arrow.png" sz="1038" st="3">
			<div>RESULTS</div>
		</Header>
	</div>,
	document.getElementById('root'));




var attri_left_bottom=
{

  Rectangle59: {
	  	top:607,
	  left:"5%",
	  right:"5%",
	  height:219,
	  width:"90%",	
	  position:"absolute",
	  backgroundColor: "#ffffff",
	  boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.3)",
	},
	blueBoard:{
		top:603,
	    left:"5%",
	  	width: "90%",
	  	right:"5%",
	  	position:"absolute",
	  height: 7,
	  borderRadius: 20,
	  backgroundColor: "#1a84eb",	
  	},
  At_st:{
  	top:56,
  	left:"8.4%",
	  position:"absolute",
	  width: "35.2%",
	  height: 30,
	  fontFamily: "AvenirNextLTPro-Demi",
	  fontSize: 25,
	  lineHeight: 1.0,
	  letterSpacing: 1.6,
	  color: "#000000",
  },
  Button_add:{
  	top:136,
  	left:"8.4%",
  	position:"absolute",
  	width:"25.7%",
	height: 56,
	borderRadius: 6,
	backgroundColor: "#1a84eb",
	cursor: 'pointer',
  },
  tex_:{
  	top:22,
  	left:"27.2%",
  	position:"absolute",
  	width: "46.4%",
	height: 17,
	fontFamily: "AvenirNextLTPro-Bold",
	fontSize: 12,
	lineHeight: 1.3,
	letterSpacing: 0.3,
	color: "#ffffff",	
  }

};

var Attach=React.createClass(
{
	render: function()
	{
		return(
		<div>

			<div style={attri_left_bottom.blueBoard}>
			</div>

			<div style={attri_left_bottom.Rectangle59}>
				<div style={attri_left_bottom.At_st}>ATTACHMENTS</div>
				
				<button style={attri_left_bottom.Button_add}>
					<div style={attri_left_bottom.tex_}>+ADD FILE
					</div>
				</button>

			</div>

		</div>
		);
	}
});

ReactDOM.render(
	<Attach/>,document.getElementById('attachments')
);

var attri_right={
	Proj_titl:{
  	top:100,
  	position:"absolute",
	width: "40.7%",
	height: 67,
	fontFamily: 'AvenirNextLTPro-Regular',
	fontSize: 51,
	lineHeight: 1.1,
	color: '#000000',
  },
  Tagline_tex:{
  		top:185,
	  	position:"absolute",
		width: "71%",
		height: 27,
		opacity: 0.3,
		fontFamily: "AvenirNextLTPro-Regular",
		fontSize: 18,
		lineHeight: 1.3,
		color: "#000000",
  },
  RectangleRight:{
  	top:225,
  	position:"absolute",
  	width: "81%",
	height: 601,
	backgroundColor: '#ffffff',
	boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
  },
  RightBlue:{
  	top:221,
  	position:"absolute",
  	width: "81%",
	height: 7,
	borderRadius: 20,
	backgroundColor: '#1a84eb',
  }
};

var Proj=React.createClass({
	render: function(){
		return(
			<div>
				<div style={attri_right.Proj_titl}>Project Title</div>

				<div style={attri_right.Tagline_tex}>Every Surveymate project comes with our 100% guarantee.</div>

				<div style={attri_right.RightBlue}></div>
				<div style={attri_right.RectangleRight}></div>
			</div>
			);
	}
});

ReactDOM.render(
	<Proj/>,document.getElementById('right')
);

var attri_Chat={
	Parent:{
		top:115,
		left:"5%",
		width:"90%",
		position:'absolute',
		height: 450,
	},
	TeamChatHead:{
		width:"50%", 
		position:"absolute",
		borderTopLeftRadius: 7,
		backgroundColor: '#ffffff',
		height:67,
		boxShadow: "0 -1px 4px 0 rgba(0, 0, 0, 0.2)",
		cursor: 'pointer',
	},

	MessageBox:{
		top:67,
		position:'absolute',
		width: '100%',
		height: 400,
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		backgroundColor: '#ffffff',
		boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
	},
	TeamChatHeadTex:{
		top:29,
		left:"35.4%",
		width:"30%", 
		position:"absolute",
		height:16,
		opacity: 0.8,
		fontFamily: 'AvenirNextLTPro-Demi',
		fontSize: 14,
		lineHeight: 0.9,
		letterSpacing: 0.4,
		color: '#000000',
	},
	TeamChatHeadMemberTex:{
		top:29,
		left:"35.4%",
		width:"41%", 
		position:"absolute",
		height:16,
		opacity: 0.8,
		fontFamily: 'AvenirNextLTPro-Demi',
		fontSize: 14,
		lineHeight: 0.9,
		letterSpacing: 0.4,
		color: '#000000',
	},
	TeamMembersHead:{
		left:"50%",
		width:"50%", 
		borderTopRightRadius: 7,
		position:"absolute",
		backgroundColor: '#f7f7f7',
		height:67,
		cursor: 'pointer',
		boxShadow: "0 -1px 4px 0 rgba(0, 0, 0, 0.2)",
	}
};



var ChatBox=React.createClass({
	getInitialState: function(){
		return {b1:true};
	},
	teamChatHeadClicked: function(event){
		this.setState({b1:true});
	},
	teamMembersHeadClicked: function(event){
		this.setState({b1:false});
	},
	render: function(){
		var content;
		if(!this.state.b1)
		{
			attri_Chat.TeamChatHead.backgroundColor="#f7f7f7";
			attri_Chat.TeamMembersHead.backgroundColor="#ffffff";
			content=<TeamInvite/>;
		}
		else
		{
			attri_Chat.TeamChatHead.backgroundColor="#ffffff";
			attri_Chat.TeamMembersHead.backgroundColor="#f7f7f7";
			content=<h1>Team Chat</h1>;	
		}
		return(
				<div style={attri_Chat.Parent}>
					<div style={attri_Chat.TeamChatHead} onClick={this.teamChatHeadClicked}>
						<div style={attri_Chat.TeamChatHeadTex}>
							TEAM CHAT
						</div>
					</div>
					<div style={attri_Chat.TeamMembersHead} onClick={this.teamMembersHeadClicked}>
						<div style={attri_Chat.TeamChatHeadMemberTex}>
							TEAM MEMBERS
						</div>
					</div>
					<div style={attri_Chat.MessageBox}>
						{content}
					</div>
				</div>
			);
	}
});

var attri_TeamInvite={
	inputInvit:{
		top:191,
		left:"8%",
		position:'absolute',
		width: "56.2%",
		height: 56,
		borderRadius: 6,
		backgroundColor: '#ffffff',
		border: 'solid 1px #d0d0d0',
	}
};

var TeamInvite=React.createClass({
	render: function(){
		return(
				<input style={attri_TeamInvite.inputInvit} placeholder="Enter email address">
					
				</input>
			);
	}
});

ReactDOM.render(
	<ChatBox/>,document.getElementById('chat')
);
