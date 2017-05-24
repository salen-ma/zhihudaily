<template>
	<div id="detail">
		<div class="banner">
			
		</div>
		<div class="article">
			<div class="user">
				<span class="user-pic"></span>
				<strong class="user-name">salen,</strong>
				<span class="user-info">dddsssdfsdff</span>
			</div>
			<div class="text">
				还是先上结论。我认为AlphaGo 理解围棋，而且 AlphaGo 比人类对围棋的理解高一个层次。

这个问题下面, @SIY.Z 的答案对我很有启发，推荐大家可以看看。

这位答主提到，

你或许还是不能接受 AlphaGo 这个样子，我想这是因为，人们下围棋，一定要先理解“围棋”什么东西，下面才可以操作。但是 AlphaGo 却是在不知道(或者没有被提供数据)“围棋是一种 2 个人的，而且两个人面对面做的，对抗的，零和的，棋盘 19*19 的，棋盘是方的，上面是打格子的，格子也是方的，有黑白两个子的，黑子先下的，两个轮流下的，要下在格点而不是格子中间的，有限时要求的，棋子数量足够的，一个棋子不会占超过一格的，棋子是圆的，两边凸起的，中国古代发明的，一种博弈游戏”中的任何一点的时候，可以战胜人类。
说得好。不过，AlphaGo 眼里其实是有“围棋”这个概念的。计算机围棋界有基于中国规则的 Tromp-Taylor 规则（Tromp-Taylor Rules）。详细的条文就不在这里贴了，我简单转述一下。Tromp-Taylor 规则定义，围棋是一个在 19*19 格点上进行，两个玩家“小黑”、“小白”，轮流分别把棋盘上的某一个格点染成黑色或白色的游戏。再加上提子和禁循环的规则，以及终局判断，就是完整的 Tromp-Taylor 规则。请各位想一想，这样的围棋，和我们眼中的围棋，有什么本质区别吗？如果不考虑围棋文化，那么我可以肯定地说，没有区别。

既然对于 AlphaGo，“围棋”这个概念本身，和人类理解的“围棋”这个概念没有区别，那我们就先聊聊我们人类，特别是职业棋手，是怎么理解围棋的。

这里引用一段我去年写的文章。

围棋是世界上最复杂的游戏之一。所谓“一着不慎，满盘皆输”，每一步棋都可能左右全局的结果。一般来说，一手棋的决策分两步。第一步，“选点”：凭经验或感觉给出几个候选的点；第二步，“判断”：分别对这几个点做形式判断，并进行比较。这两步，说来容易，但要做到笑傲众生的水平，对于天赋和勤勉的要求，不亚于一个优秀数学家所需要的。

从初学者成长为大师，棋手需要先学会基本的布局理论、掌握基本的死活、对杀常识，然后熟记数百个定式及掌握其主要分支（飞刀）、练习数万死活题，同时在大量对局中磨练。有些外行据此认为，围棋只是复杂一点的“体力劳动”。对于这一观点，下图古力同学白 1 这一招抵得上千言万语。
			</div>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style  lang="less" scoped>
	@rem:40rem;

	#detail{
		padding-top: 168/@rem;

		.banner{
			height: 610/@rem;
			border:1px solid #000;
		}

		.article{
			padding: 60/@rem;

			.user{
				height:66/@rem;
				margin-bottom: 60/@rem;
				font-size: 46/@rem;
				line-height:66/@rem;
				
				.user-pic,.user-name,.user-info{
					display: inline-block;
					height:100%;
					vertical-align: top;
				}
				.user-pic{
					width:62/@rem;
					border-radius: 5/@rem;
					border:1px solid #000;
					margin-right: 26/@rem;
				}
				.user-info{
					color:#dadada;
				}
			}

			.text{
				font-size:48/@rem;
				line-height:80/@rem;
			}
		}
	}
</style>