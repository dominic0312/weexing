require 'fileutils'
require 'zip'

class Usertemplate < ActiveRecord::Base
  Paperclip.interpolates :template_name do |attachment, style|
    attachment.instance.name
  end
  attr_accessible :description, :name, :pic,:attachfile,:installed,:preview
  has_attached_file :attachfile,
                    :path => ":rails_root/public/system/:attachment/:template_name.:extension",
                    :url  => "/:attachment/:template_name.:extension"
  has_attached_file :preview,:styles => { :medium => "300x300>", :thumb => "100x100>" }
  after_post_process :prepare
  validates_attachment_presence :attachfile
  validates_attachment_size :attachfile, :less_than => 1.megabytes
  validates_attachment_content_type :attachfile, :content_type =>  ['image/jpeg', 'image/png','application/zip','application/octet-stream']
  validates_attachment_content_type :preview, :content_type =>  ['image/jpeg', 'image/png']
  self.per_page = 8

  def prepare
    FileUtils.mkdir_p file_path
  end

  def file_path
    File.join('public','templates',self.name)
  end

  def add_path(filename)
    File.join(file_path,filename)
  end

  def zip_path(filename)
    File.join('public','system','attachfiles',filename+'.zip')
  end

  def remove_file_path
    FileUtils.rmdir file_path
  end

  def unzip_file
    logger.info("2222222222222222222")
    begin
      Zip::File.open(zip_path(self.name)) do |zipfile|
        zipfile.each do |file|
          file.extract(add_path(file.name))
        end
      end

    rescue
      logger.info("222222222222222222")
      print "An error occurred: ",$!, "\n"

    #remove_file_path
    end
  end

end
