<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>@yield('title') | Coindrant.com. Buy and Sell Bitcoin Safely</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ asset('assets/images/fav.gif') }}">
        <!-- App css -->
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('css/icons.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('css/app.min.css') }}" rel="stylesheet" type="text/css" />
        @yield('topResources')
    </head>

    <body>

        <!-- Begin page -->
        <div id="wrapper">

            <!-- ========== Left Sidebar Start ========== -->
            
                    <!--- Sidemenu -->
                    @include('layouts.inc.sidebar')
                    <!-- End Sidebar -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Topbar Start -->
                   @include('layouts.inc.topbar')
                    <!-- end Topbar -->

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="#">Simulor</a></li>
                                            <li class="breadcrumb-item"><a href="#">Layouts</a></li>
                                            <li class="breadcrumb-item active">Light Sidebar</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">@yield('pageTitle')</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 
                        
                    </div> <!-- container -->
                     @yield('content')
                    </div> <!-- content -->
                  
                <!-- Footer Start -->
                @include('layouts.inc.footer')
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->


        <!-- App js -->
        <script src="{{ asset('js/vendor.min.js') }}"></script>
        <script src="{{ asset('js/app.min.js') }}"></script>
        @yield('bottomResources')
        
    </body>
</html>
