json.array!(@documents) do |document|
  json.extract! document, :id, :title, :desc, :url
  json.url document_url(document, format: :json)
end
