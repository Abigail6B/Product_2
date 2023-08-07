<?php 
require APPPATH . 'libraries/REST_Controller.php';

header("Access-Control-Allow-Origin: *");

// Permitir las siguientes cabeceras HTTP
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Permitir las siguientes solicitudes HTTP
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

class Usuarios extends REST_Controller{

    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function index_get($id=0){

        //En caso de recuperar un producto especifico

        if(!empty($id)){
            $data =$this->db->get_where("usuarios", ["id_usuario"=>$id])->row_array();
        }
        //recuperar todas los productos 
        else {
            $data = $this->db->get("usuarios")->result();
        }
        $this->response($data, REST_Controller::HTTP_OK);

    }

    public function index_post(){
        $input = $this->input->post();
        $this->db->insert("usuarios", $input);
        $this->response(['usuario agregado'], REST_Controller::HTTP_OK);
    }

    public function index_put($id){
        $input = $this->put();
        $this->db->update("usuarios", $input, array("id_usuario"=>$id));
        $this->response(['Usuario actualizado'], REST_Controller::HTTP_OK);
    }

    public function index_delete($id){
        $this->db->delete("usuarios", array("id_usuario"=>$id));
        $this->response(['Usuario eliminado'], REST_Controller::HTTP_OK);
    }
}