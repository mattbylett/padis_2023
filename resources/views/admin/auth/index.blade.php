@extends('admin.auth')

@section('page-styles')
<!--begin::Page bg image-->
	<style>body { background-image: url('admin/assets/media/auth/bg4.jpg'); } [data-theme="dark"] body { background-image: url('admin/assets/media/auth/bg4-dark.jpg'); }</style>
<!--end::Page bg image-->
@endsection

@section('admin-content')

			<!--begin::Authentication - Sign-in -->
			<div class="d-flex flex-column flex-column-fluid flex-lg-row">
				<!--begin::Aside-->
				<div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
					<!--begin::Aside-->
					<div class="d-flex flex-center flex-lg-start flex-column">
						<!--begin::Logo-->
						<a href="../../demo1/dist/index.html" class="mb-7">
							<img alt="Logo" src="{{asset('admin/assets/media/logos/custom-3.svg')}}" />
						</a>
						<!--end::Logo-->
						<!--begin::Title-->
						<h2 class="text-white fw-normal m-0">Integration tools designed for your business</h2>
						<!--end::Title-->
					</div>
					<!--begin::Aside-->
				</div>
				<!--begin::Aside-->
				<!--begin::Body-->
				<div class="d-flex flex-center w-lg-50 p-10">
					<!--begin::Card-->
					<div class="card rounded-3 w-md-550px">
						<!--begin::Card body-->
						<div class="card-body p-10 p-lg-20">
              @if(Session::has('error')) 
              <div class="alert alert-warning alert-dismissible fade show" role="alert">

                <strong>{{session::get('error')}}</strong> 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              @endif
              @if(Session::has('success')) 
              <div class="alert alert-success alert-dismissible fade show" role="alert">

                <strong>{{session::get('success')}}</strong> 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              @endif
							<!--begin::Form-->
							<form class="form w-100" action="{{route('admin.login')}}" method="POST">
								@csrf
								<!--begin::Heading-->
								<div class="text-center mb-11">
									<!--begin::Title-->
									<h1 class="text-dark fw-bolder mb-3">Sign In</h1>
									<!--end::Title-->
									<!--begin::Subtitle-->
									<div class="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
									<!--end::Subtitle=-->
								</div>
								<!--begin::Heading-->
								<!--begin::Login options-->
								<div class="row g-3 mb-9">
									<!--begin::Col-->
									<div class="col-md-6">
										<!--begin::Google link=-->
										<a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src="{{asset('admin/assets/media/svg/brand-logos/google-icon.svg')}}" class="h-15px me-3" />Sign in with Google</a>
										<!--end::Google link=-->
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col-md-6">
										<!--begin::Google link=-->
										<a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
										<img alt="Logo" src="{{asset('admin/assets/media/svg/brand-logos/apple-black.svg')}}" class="theme-light-show h-15px me-3" />
										<img alt="Logo" src="{{asset('admin/assets/media/svg/brand-logos/apple-black-dark.svg')}}" class="theme-dark-show h-15px me-3" />Sign in with Apple</a>
										<!--end::Google link=-->
									</div>
									<!--end::Col-->
								</div>
								<!--end::Login options-->
								<!--begin::Separator-->
								<div class="separator separator-content my-14">
									<span class="w-125px text-gray-500 fw-semibold fs-7">Or with username</span>
								</div>
								<!--end::Separator-->
								<!--begin::Input group=-->
								<div class="fv-row mb-8">
									<!--begin::Username-->
									<input type="text" placeholder="Username" name="username" autocomplete="off" class="form-control bg-transparent" />
									<!--end::Username-->
								</div>
								<!--end::Input group=-->
								<div class="fv-row mb-3">
									<!--begin::Password-->
									<input type="password" placeholder="Password" name="password" autocomplete="off" class="form-control bg-transparent" />
									<!--end::Password-->
								</div>
								<!--end::Input group=-->
								<!--begin::Wrapper-->
								<div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
									<div></div>
									<!--begin::Link-->
									<a href="../../demo1/dist/authentication/layouts/creative/reset-password.html" class="link-primary">Forgot Password ?</a>
									<!--end::Link-->
								</div>
								<!--end::Wrapper-->
								<!--begin::Submit button-->
								<div class="d-grid mb-10">
									<button type="submit" class="btn btn-primary">
										<!--begin::Indicator label-->
										<span class="indicator-label">Sign In</span>
										<!--end::Indicator label-->
										<!--begin::Indicator progress-->
										<span class="indicator-progress">Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										<!--end::Indicator progress-->
									</button>
								</div>
								<!--end::Submit button-->
								<!--begin::Sign up-->
								<div class="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
								<a href="{{route('admin.register')}}" class="link-primary">Sign up</a></div>
								<!--end::Sign up-->
							</form>
							<!--end::Form-->
						</div>
						<!--end::Card body-->
					</div>
					<!--end::Card-->
				</div>
				<!--end::Body-->
			</div>
			<!--end::Authentication - Sign-in-->
@endsection

@section('page-scripts')
   		<script src="{{asset('admin/assets/js/custom/authentication/sign-in/general.js"></script> 
@endsection



