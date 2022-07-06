<template>
  <div class="tg-modalbox modal fade" id="tg-register" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="tg-modal-content">
				<div class="tg-formarea">
					<div class="tg-border-heading">
						<h3>Signup</h3>
					</div>
					<form class="tg-loginform" method="post">
						<fieldset>
							<div class="form-group">
								<input type="text" name="userName" class="form-control" placeholder="username">
							</div>
							<div class="form-group">
								<input type="email" name="email" class="form-control" placeholder="email">
							</div>
							<div class="form-group">
								<div class="tg-note">
									<i class="fa fa-exclamation-circle"></i>
									<span>We will email you your password.</span>
								</div>
							</div>
							<div class="form-group">
								<button class="tg-btn tg-btn-lg" type="submit">Login Now</button>
							</div>
							<div class="tg-description">
								<p>Already have an account? <a href="#">Login</a></p>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="tg-logintype">
					<div class="tg-border-heading">
						<h3>Signup with</h3>
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