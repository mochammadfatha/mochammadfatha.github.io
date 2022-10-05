$(document).ready(function(){
	$('.kolom').click(function(){
		let isi = $(this).text();
		let tid = $(this).prop('id');
		let rid = tid.split('_');
		let id_baris = rid[1];
		let nama = $('#nama_'+id_baris).text();

		if(isi == 'Delete'){
			let yakin = confirm(`Anda yakin ingin menghapus data atas nama ${nama}?`);

			if(!yakin) return;
			$('#baris_'+id_baris).fadeOut();
		} else{
			alert('Tidak ada apa-apa di sini');
		}
	})
})