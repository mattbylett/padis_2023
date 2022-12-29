<!--begin::Head -->
@include('admin.components.head')
<!--begin::Page-->
<!--begin::Header-->
@include('admin.components.header')
<!--begin::Sidebar-->
@include('admin.components.sidebar')
<!--end::Sidebar-->
<!--begin::Main-->
@include('admin.components.content-wrapper')
<!--begin::Main Page Content-->
@yield('admin-content')
<!--begin::Main Page Content-->
<!--begin::Footer -->
@include('admin.components.footer')
<!--end::Footer -->
<!--end::Page-->
<!--end::App-->
<!--begin::Drawers-->
<!--begin::Activities drawer-->
@include('admin.drawers.activities')
<!--end::Activities drawer-->
<!--begin::Chat drawer-->
@include('admin.drawers.chat')
<!--end::Chat drawer-->
<!--begin::Cart drawer-->
@include('admin.drawers.cart')
<!--end::Cart drawer-->
<!--end::Drawers-->
<!--begin::Engage drawers-->
<!--begin::Demos drawer-->
@include('admin.drawers.demos')
<!--end::Demos drawer-->
<!--begin::Help drawer-->
@include('admin.drawers.help')
<!--end::Help drawer-->
<!--end::Engage drawers-->
<!--begin::Engage modals-->
<!--end::Engage modals-->
<!--begin::Engage toolbar-->
@include('admin.drawers.toolbar')
<!--end::Engage toolbar-->
<!--begin::Scrolltop-->
@include('admin.drawers.scrolltop')
<!--end::Scrolltop-->
<!--begin::Modals-->
<!--begin::Modal - Upgrade plan-->
@include('admin.modals.upgrade')
<!--end::Modal - Upgrade plan-->
<!--begin::Modal - Create App-->
@include('admin.modals.create')
<!--end::Modal - Create App-->
<!--begin::Modal - New Target-->
@include('admin.modals.target')
<!--end::Modal - New Target-->
<!--begin::Modal - View Users-->
@include('admin.modals.view')
<!--end::Modal - View Users-->
<!--begin::Modal - Users Search-->
@include('admin.modals.search')
<!--end::Modal - Users Search-->
<!--begin::Modal - Invite Friends-->
@include('admin.modals.invite')
<!--end::Modal - Invite Friend-->
<!--end::Modals-->
<!--begin::Javascript-->
<script>var hostUrl = "admin/assets/";</script>
@include('admin.assets.js.footer-scripts')
@include('admin.assets.js.sweet-alert')
<!--begin::Single Page Javascript-->
@yield('page-scripts')
<!--end::Single Page Javascript-->
<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>