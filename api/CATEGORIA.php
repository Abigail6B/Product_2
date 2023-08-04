<?php 
require APPPATH . 'libraries/REST_Controller.php';
// Permitir el acceso desde cualquier origen (*)
header("Access-Control-Allow-Origin: *");

// Permitir las siguientes cabeceras HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Permitir las siguientes solicitudes HTTP
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

class CATEGORIA extends REST_Controller{

    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function index_get($id=0){

        //En caso de recuperar una categoria en especifico

        if(!empty($id)){
            $data =$this->db->get_where("categorias", ["id_categoria"=>$id])->row_array();
        }
        //recuperar todas los categorias 
        else {
            $data = $this->db->get("categorias")->result();
        }
        $this->response($data, REST_Controller::HTTP_OK);

    }

    public function index_post(){
        $input = $this->input->post();
        $this->db->insert("categorias", $input);
        $this->response(['categoria agregada'], REST_Controller::HTTP_OK);
    }

    public function index_put($id){
        $input = $this->put();
        $this->db->update("categorias", $input, array("id_categoria"=>$id));
        $this->response(['categoria actualizada'], REST_Controller::HTTP_OK);
    }

    public function index_delete($id){
        $this->db->delete("categorias", array("id_categoria"=>$id));
        $this->response(['categoria eliminada'], REST_Controller::HTTP_OK);
    }
}