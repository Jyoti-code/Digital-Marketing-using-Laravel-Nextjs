<?php

namespace App\Http\Controllers\api;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function deleteCategory($id)
    {
        DB::table('categories')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'Category deleted successfully']);
    }
    public function deleteAbout($id)
    {
        DB::table('about')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'About deleted successfully']);
    }
    public function deleteBanner($id)
    {
        DB::table('banner')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'Banner deleted successfully']);
    }
    public function deleteTestimonial($id)
    {
        DB::table('testimonial')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'Testimonial deleted successfully']);
    }
    public function deleteProduct($id)
    {
        DB::table('product')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'Product deleted successfully']);
    }
    public function deleteServices($id)
    {
        DB::table('services')->where('id', $id)->update(['deleted_at' => now()]);    
        return response()->json(['message' => 'Service deleted successfully']);
    }
    public function productStore(Request $request)
    {
    try {
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $filename = "";
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->file('image')->extension();
            $request->file('image')->move(public_path('uploads'), $filename);
        }

        $data = [
            'course' => $request->input('course'),
            'description' => $request->input('description'),
            'image' => $filename,
            'created_at' => now(),
        ];

        DB::table('product')->insert($data);

        return response()->json([
            'message' => 'Product added successfully!',
            'data' => $data
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Product not added!',
            'exception' => $e->getMessage()
        ], 500);
    }
    }
    public function productList(){
        $list = DB::table('product')
            ->select('product.*')
            ->whereNull('deleted_at')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function productEdit($id) {
        $productEdit = DB::table('product')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'productEdit' => $productEdit
        ]);
    }
    public function productUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $filename);

            $updated = DB::table('product')
                ->where('id', $id)
                ->update(['image' => $filename]);
        } else {
            $updated = DB::table('product')
                ->where('id', $id)
                ->update([
                    'course' => $request->input('course'),
                    'description' => $request->input('description'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'Product updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Product not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function testimonialStore(Request $request){
    try {
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $filename = "";
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->file('image')->extension();
            $request->file('image')->move(public_path('uploads'), $filename);
        }

        $data = [
            'name' => $request->input('name'),
            'profession' => $request->input('profession'),
            'description' => $request->input('description'),
            'image' => $filename,
            'created_at' => now(),
        ];

        DB::table('testimonial')->insert($data);

        return response()->json([
            'message' => 'Testimonial added successfully!',
            'data' => $data
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Testimonial not added!',
            'exception' => $e->getMessage()
        ], 500);
    }
    }
    public function testimonialList(){
        $list = DB::table('testimonial')
            ->select('testimonial.*')
            ->whereNull('deleted_at')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function testimonialEdit($id) 
    {
        $testimonialEdit = DB::table('testimonial')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'testimonialEdit' => $testimonialEdit
        ]);
    }
    public function testimonialUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $filename);

            $updated = DB::table('testimonial')
                ->where('id', $id)
                ->update(['image' => $filename]);
        } else {
            $updated = DB::table('testimonial')
                ->where('id', $id)
                ->update([
                    'name' => $request->input('name'),
                    'profession' => $request->input('profession'),
                    'description' => $request->input('description'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'Testimonial updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Testimonial not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function servicesStore(Request $request)
    {
    try {
        $request->validate([
            'icon_img' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $filename = "";
        if ($request->hasFile('icon_img')) {
            $filename = time() . '.' . $request->file('icon_img')->extension();
            $request->file('icon_img')->move(public_path('uploads'), $filename);
        }

        $data = [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'icon_img' => $filename,
            'created_at' => now(),
        ];

        DB::table('services')->insert($data);

        return response()->json([
            'message' => 'Services added successfully!',
            'data' => $data
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Services not added!',
            'exception' => $e->getMessage()
        ], 500);
    }
    }
    public function servicesList(){
        $list = DB::table('services')
        ->whereNull('deleted_at')
            ->select('services.*')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function serviceEdit($id) 
    {
        $serviceEdit = DB::table('services')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'serviceEdit' => $serviceEdit
        ]);
    }
    public function serviceUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('icon_img')) {
            $filename = time() . '.' . $request->icon_img->extension();
            $request->icon_img->move(public_path('uploads'), $filename);

            $updated = DB::table('services')
                ->where('id', $id)
                ->update(['icon_img' => $filename]);
        } else {
            $updated = DB::table('services')
                ->where('id', $id)
                ->update([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'Services updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Services not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function aboutStore(Request $request)
    {
    try {
        $request->validate([
            'about_img' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $filename = "";
        if ($request->hasFile('about_img')) {
            $filename = time() . '.' . $request->file('about_img')->extension();
            $request->file('about_img')->move(public_path('uploads'), $filename);
        }

        $data = [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'about_img' => $filename,
            'created_at' => now(),
        ];

        DB::table('about')->insert($data);

        return response()->json([
            'message' => 'About added successfully!',
            'data' => $data
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'About not added!',
            'exception' => $e->getMessage()
        ], 500);
    }
    }
    public function aboutList(){
        $list = DB::table('about')
            ->select('about.*')
            ->whereNull('deleted_at')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function aboutEdit($id) 
    {
        $aboutEdit = DB::table('about')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'aboutEdit' => $aboutEdit
        ]);
    }
    public function aboutUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('about_img')) {
            $filename = time() . '.' . $request->about_img->extension();
            $request->about_img->move(public_path('uploads'), $filename);

            $updated = DB::table('about')
                ->where('id', $id)
                ->update(['about_img' => $filename]);
        } else {
            $updated = DB::table('about')
                ->where('id', $id)
                ->update([
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'About updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'About not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function banner(Request $request)
    {
    try {
        // Validation with 'nullable' to allow no image file
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'background_img' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        $filename = "";
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->file('image')->extension();
            $request->file('image')->move(public_path('uploads'), $filename);
        }
        $backimg="";
        if ($request->hasFile('background_img')) {
            $backimg = time() . '.' . $request->file('background_img')->extension();
            $request->file('background_img')->move(public_path('uploads'), $backimg);
        }

        $data = [
            'heading' => $request->input('heading'),
            'description' => $request->input('description'),
            'image' => $filename,
            'background_img' => $backimg,
            'created_at' => now(),
        ];

        DB::table('banner')->insert($data);

        return response()->json([
            'message' => 'Banner added successfully!',
            'data' => $data
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Banner not added!',
            'exception' => $e->getMessage()
        ], 500);
    }
    }
    public function bannerList(){
        $list = DB::table('banner')
            ->select('banner.*')
            ->whereNull('deleted_at')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function bannerEdit($id) 
    {
        $bannerEdit = DB::table('banner')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'bannerEdit' => $bannerEdit
        ]);
    }
    public function bannerUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $filename);

            $updated = DB::table('banner')
                ->where('id', $id)
                ->update(['image' => $filename]);
        } else {
            $updated = DB::table('banner')
                ->where('id', $id)
                ->update([
                    'heading' => $request->input('heading'),
                    'description' => $request->input('description'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'Banner updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Banner not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function category(Request $request)
    {
        try {
            $filename = "";
            $request->validate([
                'icon' => 'required|image|mimes:jpg,png,jpeg,gif|max:2048',
            ]);

            if ($request->hasFile('icon')) {
                $filename = time() . '.' . $request->icon->extension();
                $request->icon->move(public_path('uploads'), $filename);
            }

            $data = [
                'cat_name' => $request->input('cat_name'),
                'descrption' => $request->input('descrption'),
                'icon' => $filename,
                'created_at' => now(),
            ];

            DB::table('categories')->insert($data);

            return response()->json([
                'message' => 'Category added successfully!',
                'data' => $data
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Category not added!',
                'exception' => $e->getMessage()
            ], 500);
        }
    }
    public function categoryList(){
        $list = DB::table('categories')
            ->select('categories.*')
            ->whereNull('deleted_at')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function categoryEdit($id) 
    {
        $categoryEdit = DB::table('categories')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'categoryEdit' => $categoryEdit
        ]);
    }
    public function categoryUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('icon')) {
            $filename = time() . '.' . $request->icon->extension();
            $request->icon->move(public_path('uploads'), $filename);

            $updated = DB::table('categories')
                ->where('id', $id)
                ->update(['icon' => $filename]);
        } else {
            $updated = DB::table('categories')
                ->where('id', $id)
                ->update([
                    'cat_name' => $request->input('cat_name'),
                    'descrption' => $request->input('descrption'),
                    'updated_at' => now(),
                ]);
        }
        return response()->json([
            'message' => 'Category updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Category not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
    }
    public function header(Request $request) {
        try {
            $filename = "";
            $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:2048',
            ]);
    
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $filename);
    
            $data = [
                'image' => $filename,
                'h1' => $request->input('h1'),
                'h2' => $request->input('h2'),
                'h3' => $request->input('h3'),
                'h4' => $request->input('h4'),
                'h5' => $request->input('h5'),
            ];
    
            DB::table('home')->insert($data);
    
            return response()->json([
                'message' => 'Uploaded successfully!',
                'data' => $data,
            ]);
    
        } catch (\Exception $e) {
            // Return the exception message for debugging
            return response()->json([
                'error' => 'Not uploaded!',
                'exception' => $e->getMessage(),
            ]);
        }
    }
    public function headerList(){
        $list = DB::table('home')
            ->select('home.*')
            ->get();            
        return response()->json([
            'list' => $list
        ]);
    }
    public function headerEdit($id) 
    {
        $headerEdit = DB::table('home')
        ->where('id', $id) 
        ->first();
        return response()->json([
            'headerEdit' => $headerEdit
        ]);
    }
    public function headerUpdate(Request $request)
    {
    $id = $request->input('id');
    
    try {
        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads'), $filename);

            $updated = DB::table('home')
                ->where('id', $id)
                ->update(['image' => $filename]);
        } else {
            $updated = DB::table('home')
                ->where('id', $id)
                ->update([
                    'h1' => $request->input('h1'),
                    'h2' => $request->input('h2'),
                    'h3' => $request->input('h3'),
                    'h4' => $request->input('h4'),
                    'h5' => $request->input('h5'),
                ]);
        }

        return response()->json([
            'message' => 'Header updated successfully!'
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Header not updated!',
            'message' => $e->getMessage()
        ], 500);
    }
}    
}
