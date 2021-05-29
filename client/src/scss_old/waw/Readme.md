======== Structure  ========
1. waw button 
2. waw input 
3. waw checkbox
4. waw radio
5. waw textarea
6. waw switch 
7. waw nav 
8. waw table 


1. ==== waw button ====
<button class="waw-btn _primary _primary--mob">Add</button>
<button class="waw-btn _second _second--mob">Cancel</button>
<button class="waw-btn _danger _danger--mob">Delete</button>

2. ==== waw input ====
<label class="waw-input">
	<span class="waw-input__title">Email</span>
	<input (keydown.enter)="true" type="email" placeholder="E-mail" name="email">
</label>

3. ====  waw checkbox ====
<label class="waw-checkbox">
	<span class="waw-checkbox___title">Title</span>
	<input name="Name" type="checkbox" disabled>
	<span class="checkmark"></span>
</label>

4. ==== waw radio ====
<label for="name1" class="waw-radio">
	<span class="waw-radio__title">Title</span>
	<input id="name1" name="radio" type="radio" checked="checked">
	<span class="checkmark"></span>
</label>

5. ==== waw textarea ====
<label class="waw-textarea">
	<span class="waw-textarea__title">Alert message</span>
	<textarea placeholder="Alert messages" name="Alert message" disabled></textarea>
</label>

6. ==== waw switch ====
<div class="waw-switch">
	<label class="waw-switch__toggle">
		<input type="checkbox" name="notifications">
		<span class="waw-switch__slider _round"></span>
	</label>
	<div class="waw-switch__text">title</div>
</div>


7. ==== waw nav ====
<nav class="waw-nav">
	<input type="checkbox" id="check">
	<label class="waw-nav__logo"><a href="#">WAW</a></label>
	<label for="check" class="waw-nav__checkbtn">
		<i class="fas fa-bars"></i>
	</label>

	<ul>
		<li><a class="active" href="#"><label for="menu">Menu</label></a></li>
		<li><a href="#">Home</a></li>
		<li><a href="#">Get started</a></li>
		<li><a href="#">Documentation</a></li>
		<li><a href="#">Download</a></li>
	</ul>
</nav>

<input class="leftMenu__input" type="checkbox" id="menu">
<div class="leftMenu leftMenu__active">
	<ul>
		<li><a href="#">Link</a></li>
		<li><a href="#">Link</a></li>
		<li><a href="#">Link</a></li>
		<li><a href="#">Link</a></li>
		<li><a href="#">Link</a></li>
	</ul>
</div>

8. ==== waw table ====
<div class="table-wrapp">
	<table class="table" cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th scope="col">Clients</th>
				<th scope="col">Address</th>
				<th scope="col">Email</th>
				<th scope="col">Phone</th>
				<th scope="col">additional phone</th>
				<th scope="col">Gender</th>
				<th scope="col">Date of birth</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let item of [{},{},{},{},{},{},{},{},{},{},{}]">
				<td data-label="Clients">
					<div class="cl-table-clients">
						<div class="cl-table-clients__img"><img src="assets/img/user.jpg" alt="user avatar" /></div>
						<div class="cl-table-clients__info">
							<div class="cl-table-clients__name">Anna Korsun</div>
							<div class="cl-table-clients__desc">#65ghd4</div>
						</div>
					</div>
				</td>
				<td data-label="Address">Street of Blue Flowers 23</td>
				<td data-label="Email">korsun_anna@gmail.com</td>
				<td data-label="Phone">(201) 555-0124</td>
				<td data-label="phone 2">(201) 555-0124</td>
				<td data-label="Gender">Woman</td>
				<td data-label="birth">2.05.1978</td>
			</tr>
		</tbody>
	</table>
</div>