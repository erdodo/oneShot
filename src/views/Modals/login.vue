<template>
  <div class="tg-modalbox modal fade" id="tg-login" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="tg-modal-content">
				<div class="tg-formarea">
					<div class="tg-border-heading">
						<h3>Login</h3>
					</div>
					<form class="tg-loginform" method="post">
						<fieldset>
							<div class="form-group">
								<input type="text" name="userName/email" class="form-control" placeholder="username/email">
							</div>
							<div class="form-group">
								<input type="password" name="password" class="form-control" placeholder="password">
							</div>
							<div class="form-group">
								<label>
									<input type="checkbox" value="rememberme" class="checkbox">
									<em>Remember Me</em>
								</label>
								<a href="#">
									<em>Forgot Password</em>
									<i class="fa fa-question-circle"></i>
								</a>
							</div>
							<div class="form-group">
								<button class="tg-btn tg-btn-lg" type="submit">Login Now</button>
							</div>
							<div class="tg-description">
								<p>Don't have an account? <a href="#">Signup</a></p>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="tg-logintype">
					<div class="tg-border-heading">
						<h3>Login with</h3>
					</div>
					<ul>
						<li class="tg-facebook"><a href="#">facebook</a></li>
						<li class="tg-twitter"><a href="#">twitter</a></li>
						<li class="tg-googleplus"><a href="#">google+</a></li>
						<li class="tg-linkedin"><a href="#">linkedin</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>