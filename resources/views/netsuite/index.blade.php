Netsuite Authorize<br/><br/>

@php 
$link = "https://7103496.app.netsuite.com/app/login/oauth2/authorize.nl?scope=rest_webservices&redirect_uri=https%3A%2F%2Fpadis_insinc_2023.test%2Fapi%2Fauthorize&response_type=code&client_id=43042fb982249f390f207021c2ab5789f9983277025fd0dac9807692755b5eca&state=zmHhAalujxU753rMPCWdZ9Ep";
@endphp

<a href="{{$link}}" type="button" class="connect">Connect Netsuite</a>
